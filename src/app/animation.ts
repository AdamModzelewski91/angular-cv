import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";

const rightMove = [
  style({ position: 'relative'}),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%'
    })
  ]),
  query(':enter', [
    style({ left: '100%' })
  ]),
  query(':leave', animateChild()),
  group([
    query(':leave', [
      animate('300ms ease-out', style({ left: '-100%' }))
    ]),
    query(':enter', [
      animate('300ms ease-out', style({ left: '0%'}))
    ])
  ]),
];

const leftMove = [
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%'
    })
  ]),
  query(':enter', [
    style({ left: '-100%' })
  ]),
  query(':leave', animateChild()),
  group([
    query(':leave', [
      animate('300ms ease-out', style({ left: '100%' }))
    ]),
    query(':enter', [
      animate('300ms ease-out', style({ left: '0%' }))
    ]),
  ]),
];

export const slideInAnimation =
  trigger('routeAnimations', [
    transition("headerPage => skillsPage", rightMove),
    transition("headerPage => expPage", rightMove),
    transition("headerPage => myProjectsPage", rightMove),
    transition("headerPage => aboutMePage", rightMove),
    transition("headerPage => contactPage", rightMove),
    transition("skillsPage => expPage", rightMove),
    transition("skillsPage => myProjectsPage", rightMove),
    transition("skillsPage => aboutMePage", rightMove),
    transition("skillsPage => contactPage", rightMove),
    transition("expPage => myProjectsPage", rightMove),
    transition("expPage => aboutMePage", rightMove),
    transition("expPage => contactPage", rightMove),
    transition("myProjectsPage => aboutMePage", rightMove),
    transition("myProjectsPage => contactPage", rightMove),
    transition("aboutMePage => contactPage", rightMove),

    transition("headerPage <=> skillsPage", leftMove),
    transition("headerPage <=> expPage", leftMove),
    transition("headerPage <=> myProjectsPage", leftMove),
    transition("headerPage <=> aboutMePage", leftMove),
    transition("headerPage <=> contactPage", leftMove),
    transition("skillsPage <=> expPage", leftMove),
    transition("skillsPage <=> myProjectsPage", leftMove),
    transition("skillsPage <=> aboutMePage", leftMove),
    transition("skillsPage <=> contactPage", leftMove),
    transition("expPage <=> myProjectsPage", leftMove),
    transition("expPage <=> aboutMePage", leftMove),
    transition("expPage <=> contactPage", leftMove),
    transition("myProjectsPage <=> aboutMePage", leftMove),
    transition("myProjectsPage <=> contactPage", leftMove),
    transition("aboutMePage <=> contactPage", leftMove),
  ]
);
