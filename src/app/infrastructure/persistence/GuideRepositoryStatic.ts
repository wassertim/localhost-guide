import { Injectable } from '@angular/core';
import { Guide } from '../../domain/model/Guide';
import { GuideRepository } from '../../domain/repositories/GuideRepository';

@Injectable({
    providedIn: 'root'
})
export class GuideRepositoryStatic implements GuideRepository {
    
    getAll(): Promise<Guide[]> {
        return Promise.resolve([{
            id: '1',
            title: 'Guide 1',
            description: 'Description 1'
        }, {
            id: '2',
            title: 'Guide 2',
            description: 'Description 2'
        }, {
            id: '3',
            title: 'Guide 3',
            description: 'Description 3'
        }]);
    }
}