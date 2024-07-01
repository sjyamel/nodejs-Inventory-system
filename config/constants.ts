export enum GENDER {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

export enum USER_STATUS {
  INVITATION_SENT = 'invitation_sent',
  CONFIRMED = 'confirmed',
  DEACTIVATED = 'deactivated',
  COMPROMISED = 'compromised',
  PENDING = 'pending',
}


export enum ROLES {
  SYSTEM_ADMIN = 'system_admin',
  CLIENT = 'client',
  SUPPLIER = 'supplier'
}

export enum ORDER_STATUS {
  CONFIRMED = 'confirmed',
  REJECTED = 'rejected',
  PENDING = 'pending'
}
