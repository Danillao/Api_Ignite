import ListCategoriesController from '../listCategories/ListCategoriesController';
import ListCategoriesUseCase from '../listCategories/ListCategoriesUseCase';
import CategoriesRepository from '../../repositories/implementations/CategoriesRepository';


const categoriesRepository = CategoriesRepository.getInstance();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
const listCategoriesController = new ListCategoriesController(listCategoriesUseCase);


export default listCategoriesController;
