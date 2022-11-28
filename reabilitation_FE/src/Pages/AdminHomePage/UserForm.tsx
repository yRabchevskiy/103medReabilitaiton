import React from 'react';
import { Gender, IAuthData, IName, IUser, Role } from '../../Api/models/admin_models';
import PrimaryButton from '../../Components/Buttons/PrimaryButton';
import ReactiveInput from '../../Components/Inputs/ReactiveInput';
import ReactiveSelect from '../../Components/Inputs/ReactiveInput/select';
import schema from './schema';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { usePost } from '../../Api/service';

interface Props {
  user?: IUser;
  onClose: () => void;
}

const UserForm: React.FC<Props> = (props: Props) => {
  const { register, handleSubmit, formState: { errors, touchedFields } } = useForm({
    mode: 'all',
    resolver: yupResolver(schema),
  });
  const { loading, response, onPost } = usePost<IUser, IUser>();
  const onSubmit = (data: any) => {
    onPost('/user', data);
  };

  React.useEffect(() => {
    if (response) {
      console.log(response);
    }
  }, [response]);

  const onClose = () => {
    props.onClose();
  };
  return (
    <>
      <h2>Create</h2>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="new-password">
        <ReactiveInput label="First name*" {...register("name.first_name")}>
          {touchedFields?.name?.first_name && (errors?.name as any)?.first_name && <span>{(errors?.name as any)?.first_name?.message}</span>}
        </ReactiveInput>
        <ReactiveInput label="Last name*" {...register("name.last_name")}>
          {touchedFields?.name?.last_name && (errors?.name as any)?.last_name && <span>{(errors?.name as any)?.last_name.message}</span>}
        </ReactiveInput>
        <ReactiveInput label="Email" {...register("email")}>
          {touchedFields?.email && errors?.email && <span>{(errors as any)?.email?.message}</span>}
        </ReactiveInput>
        <ReactiveInput label="Phone*" {...register("phone")}>
          {touchedFields?.phone && errors?.phone && <span>{(errors as any)?.phone?.message}</span>}
        </ReactiveInput>
        <ReactiveInput type="date" label="Birthday*" {...register("birthday")}>
          {touchedFields?.birthday && errors?.birthday && <span>{(errors as any)?.birthday?.message}</span>}
        </ReactiveInput>
        <ReactiveSelect label="Gender*" defaultSelected={Gender.Male} options={[Gender.Male, Gender.Famele]} {...register("gender")}>
          {touchedFields?.gender && errors?.gender && <span>{(errors as any)?.gender?.message}</span>}
        </ReactiveSelect>
        <ReactiveSelect label="Role*" defaultSelected={Role.Doctor} options={[Role.Admin, Role.Doctor, Role.Staff]} {...register("permision")}>
          {touchedFields?.permision && errors?.permision && <span>{(errors as any)?.permision?.message}</span>}
        </ReactiveSelect>
        <ReactiveInput label="Login*" {...register("authData.login")}>
          {touchedFields?.authData?.login && (errors?.authData as any)?.login && <span>{(errors?.authData as any)?.login?.message}</span>}
        </ReactiveInput>
        <ReactiveInput label="Password*" {...register("authData.password")}>
          {touchedFields?.authData?.password && (errors?.authData as any)?.password && <span>{(errors?.authData as any)?.password?.message}</span>}
        </ReactiveInput>
        <div style={{ display: 'flex', flexWrap: 'nowrap' }}>
          <PrimaryButton
            style={{ height: '52px', width: 'calc(50% - 12px)', margin: '0 12px 0 0', borderColor: 'var(--inputActive)' }}
            // disabled={!!Object.keys(errors).length}
            label="Cancel"
            onClick={onClose}
          />
          <PrimaryButton
            style={{ height: '52px', width: 'calc(50% - 12px)', margin: '0 0 0 12px', borderColor: 'var(--inputActive)', background: 'var(--inputActive)', color: '#ffffff' }}
            type="submit"
            // disabled={!!Object.keys(errors).length}
            label="Save"
          />
        </div>

      </form>
    </>
  );
};

export default React.memo(UserForm);