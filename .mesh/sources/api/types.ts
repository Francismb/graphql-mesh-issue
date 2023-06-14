// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace ApiTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  api_TestResp: { input: any; output: any; }
  api_TestReq_Input: { input: any; output: any; }
  ObjMap: { input: any; output: any; }
};

export type Query = {
  api_EventsService_connectivityState?: Maybe<ConnectivityState>;
};


export type Queryapi_EventsService_connectivityStateArgs = {
  tryToConnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ConnectivityState =
  | 'IDLE'
  | 'CONNECTING'
  | 'READY'
  | 'TRANSIENT_FAILURE'
  | 'SHUTDOWN';

export type Mutation = {
  api_EventsService_createEvent?: Maybe<Scalars['api_TestResp']['output']>;
};


export type Mutationapi_EventsService_createEventArgs = {
  input?: InputMaybe<Scalars['api_TestReq_Input']['input']>;
};

  export type QuerySdk = {
      /** undefined **/
  api_EventsService_connectivityState: InContextSdkMethod<Query['api_EventsService_connectivityState'], Queryapi_EventsService_connectivityStateArgs, MeshContext>
  };

  export type MutationSdk = {
      /** null **/
  api_EventsService_createEvent: InContextSdkMethod<Mutation['api_EventsService_createEvent'], Mutationapi_EventsService_createEventArgs, MeshContext>
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["api"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
