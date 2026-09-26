import Product, { IProduct } from "@/models/Product";

interface FindProductsOptions {
  page?: number;
  limit?: number;
  category?: string;
  status?: IProduct["status"];
  isFeatured?: boolean;
  search?: string;
  sort?: "newest" | "oldest" | "price_asc" | "price_desc";
}

export const productRepository = {
  findById(id: string) {
    return Product.findById(id);
  },

  findBySlug(slug: string) {
    return Product.findOne({
      slug: slug.toLowerCase(),
    });
  },

  findBySku(sku: string) {
    return Product.findOne({
      sku: sku.toUpperCase(),
    });
  },

  findActiveBySlug(slug: string) {
    return Product.findOne({
      slug: slug.toLowerCase(),
      status: "active",
    });
  },

  findByCategory(categoryId: string) {
    return Product.find({
      category: categoryId,
      status: "active",
    });
  },

  findFeatured() {
    return Product.find({
      status: "active",
      isFeatured: true,
    }).sort({
      createdAt: -1,
    });
  },

  async findAll(options: FindProductsOptions = {}) {
    const {
      page = 1,
      limit = 20,
      category,
      status = "active",
      isFeatured,
      search,
      sort = "newest",
    } = options;

    const filter: Record<string, unknown> = {
      status,
    };

    if (category) {
      filter.category = category;
    }

    if (typeof isFeatured === "boolean") {
      filter.isFeatured = isFeatured;
    }

    if (search) {
      filter.$or = [
        {
          name: {
            $regex: search,
            $options: "i",
          },
        },
        {
          brand: {
            $regex: search,
            $options: "i",
          },
        },
      ];
    }

    const sortMap = {
      newest: { createdAt: -1 },
      oldest: { createdAt: 1 },
      price_asc: { price: 1 },
      price_desc: { price: -1 },
    } as const;

    const skip = (page - 1) * limit;

    const [products, total] = await Promise.all([
      Product.find(filter).sort(sortMap[sort]).skip(skip).limit(limit),
      Product.countDocuments(filter),
    ]);

    return {
      products,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  },

  create(data: Partial<IProduct>) {
    return Product.create(data);
  },

  updateById(id: string, data: Partial<IProduct>) {
    return Product.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
  },

  deleteById(id: string) {
    return Product.findByIdAndDelete(id);
  },
};
