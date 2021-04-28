import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const user2 = this.usersRepository.findById(user_id);

    if (!user2){
      throw new Error("User already not exists!");
    }
    const user = {
      name: user2.name,
      email:user2.email,
      admin: true,     
      created_at: user2.created_at,
      updated_at:new Date(user2.updated_at)
    }
    const userUpdate = this.usersRepository.turnAdmin( user   )

      
    return userUpdate;

    }


  

}

export { TurnUserAdminUseCase };
