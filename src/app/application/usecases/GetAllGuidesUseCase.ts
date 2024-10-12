import { Guide } from '../../domain/model/Guide';
import { GuideRepository } from '../../domain/repositories/GuideRepository';

export class GetAllGuidesUseCase {    
    
    constructor(private guideRepository: GuideRepository) {        
    }
    
    public async execute(): Promise<Guide[]> {
        return this.guideRepository.getAll();
    }
}