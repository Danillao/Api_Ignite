import { ISpecificationsRepository, ICreateSpecificationDTO } from '../ISpecificationsRepository';
import Specification from '../../model/Specification';


class SpecificationsRepository implements ISpecificationsRepository {
  private specifitacions: Specification[];

  constructor() {
    this.specifitacions = [];
  }


  public findByName(name: string): Specification {

    const specification = this.specifitacions.find(specification => specification.name === name);

    return specification;
  }

  public create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifitacions.push(specification);
  }
}


export default SpecificationsRepository;
