import { Guide } from '../model/Guide';

export interface GuideRepository {

    getAll(): Promise<Guide[]>;
}