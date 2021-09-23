import SpecificationsRepository from "../../repositories/implementations/SpecificationsRepository";
import CreateSpecificationUseCase from '../createSpecification/CreateSpecificationUseCase';
import CreateSpecificationController from '../createSpecification/CreateSpecificationController';


const specificationsRepository = new SpecificationsRepository();
const createSpecificationUseCase = new CreateSpecificationUseCase(specificationsRepository);
const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase)


export default createSpecificationController;
