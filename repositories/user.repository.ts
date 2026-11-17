import User, { IUser } from "@/models/User";

export const userRespository = {
  findByEamil(email: string, includePassword = false, Select?:string | undefined ) {
    const query = User.findOne({ email: email.toLowerCase() });

    if (Select) {
      query.select(Select);
    }

    if (includePassword) {
      query.select(Select ?? "+password");
    }

    return query;
  },

  findById(id: string) {
    return User.findById(id);
  },

  findAll() {
    return User.find();
  },

  create(data: Partial<IUser>) {
    return User.create(data);
  },

  updateById(id: string, data: Partial<IUser>) {
    return User.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
  },

  deleteById(id: string) {
    return User.findByIdAndDelete(id);
  },
};
