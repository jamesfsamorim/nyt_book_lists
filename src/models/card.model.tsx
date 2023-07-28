export enum RankCardType {
    Gold = 1,
    Silver = 2,
    Bronze = 3,
}

export interface CardType {
  CardContainerType: React.ElementType,
  RankBackgroundType: React.ElementType,
  ImportantLabelType: React.ElementType,
}
