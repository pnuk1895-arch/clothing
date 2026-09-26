import Category, { ICategroy } from "@/models/Category";

export const categoryRepository = {
  findById(id: string) {
    return Category.findById(id);
  },

  findBySlug(slug: string) {
    return Category.findOne({
      slug: slug.toLowerCase(),
    });
  },

  findAll() {
    return Category.find();
  },

  findActive() {
    return Category.find({
      isActive: true,
    });
  },

  findByParentId(parentId: string | null) {
    return Category.find({
      parent: parentId,
      isActive: true,
    });
  },

  create(data: Partial<ICategroy>) {
    return Category.create(data);
  },

  updateById(id: string, data: Partial<ICategroy>) {
    return Category.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
  },

  deleteById(id: string) {
    return Category.findByIdAndDelete(id);
  },
};
