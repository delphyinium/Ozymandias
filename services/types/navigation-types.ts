import { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  Poem: undefined;
  Themes: undefined;
  LiteraryDevices: undefined;
  Gallery: undefined;
  Audio: undefined;
  Timeline: undefined;
  Conclusion: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> = StackScreenProps<
  RootStackParamList,
  T
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
} 