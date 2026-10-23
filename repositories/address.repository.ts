import Address, { IAddress } from "@/models/Address";

export const addressRepository = {
  findById(id: string) {
    return Address.findById(id);
  },

  findByIdAndUserId(id: string, userId: string) {
    return Address.findOne({
      _id: id,
      user: userId,
    });
  },

  findByUserId(userId: string) {
    return Address.find({
      user: userId,
    }).sort({
      isDefault: -1,
      createdAt: -1,
    });
  },

  findDefaultByUserId(userId: string) {
    return Address.findOne({
      user: userId,
      isDefault: true,
    });
  },

  create(data: Partial<IAddress>) {
    return Address.create(data);
  },

  updateByIdAndUserId(id: string, userId: string, data: Partial<IAddress>) {
    return Address.findOneAndUpdate(
      {
        _id: id,
        user: userId,
      },
      data,
      {
        new: true,
        runValidators: true,
      },
    );
  },

  deleteByIdAndUserId(id: string, userId: string) {
    return Address.findOneAndDelete({
      _id: id,
      user: userId,
    });
  },

  unsetDefaultByUserId(userId: string) {
    return Address.updateMany(
      {
        user: userId,
        isDefault: true,
      },
      {
        $set: {
          isDefault: false,
        },
      },
    );
  },
};
