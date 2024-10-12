import { Component, Inject } from '@angular/core';
import { GuideRepository } from '../../../../domain/repositories/GuideRepository';
import { GUIDE_REPOSITORY } from '../../../../app.config';
import { Guide } from '../../../../domain/model/Guide';

@Component({
  selector: 'app-guide-list',
  standalone: true,
  imports: [],
  templateUrl: './guide-list.component.html',
  styleUrl: './guide-list.component.scss'
})
export class GuideListComponent {

  guides: Guide[] = [];

  constructor(@Inject(GUIDE_REPOSITORY) private guideRepository: GuideRepository) { }

  ngOnInit() {
    this.guideRepository.getAll().then(guides => {
      this.guides = guides;
    });
  }
}
