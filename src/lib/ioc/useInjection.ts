import React from 'react';
import { InjectionToken, DependencyContainer } from 'tsyringe';

export const DIContainerContext = React.createContext<DependencyContainer | null>(null);

export const useInjection = <T>(injectionToken: InjectionToken<T>): T => {
  const context = React.useContext(DIContainerContext);
  const dependency = context?.resolve<T>(injectionToken);

  if (dependency) {
    return dependency;
  }
  throw new Error(
    `Unable to resolve dependency for injectionToken: ${String(
      injectionToken,
    )}. Did you wrap your components in a DIContainerContext.Provider? 
    Or maybe you forgot to register the dependency?`,
  );
};
