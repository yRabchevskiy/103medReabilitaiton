import React from "react";
import { ActionRowWrapper, PageFlexWrapper, TableWrapper } from "../page_style";
import { DataTable } from 'primereact/datatable';
import { Column } from "primereact/column";
import { IUser } from "../../Api/models/admin_models";
import { useGet } from "../../Api/service";
import { format } from "date-fns";
import ActionRow from "./ActionRow";
import { Sidebar } from 'primereact/sidebar';
import UserForm from "./UserForm";

interface Props { }
const AdminHomePage: React.FC<Props> = (props: Props) => {
  const [users, setUsers] = React.useState<IUser[]>([]);
  const { loading, response, onGet } = useGet<IUser[]>();
  const [showCreatePanel, setShdowCreatePanel] = React.useState<boolean>(false);
  React.useEffect(() => {
    tryLoadUsers();
  }, []);

  React.useEffect(() => {
    if (response) {
      setUsers(response);
    }
  }, [response]);

  const tryLoadUsers = () => {
    onGet('/users');
  };

  const nameTemplate = (rowData: IUser) => {
    return <>{rowData.name.first_name} {rowData.name.last_name}</>;
  };

  const dateTemplate = (rowData: IUser) => {
    return <>{rowData.birthday ? format(new Date(rowData.birthday), 'dd/MM/yyyy') : null}</>;
  };

  const onShowCreatePanel = (show: boolean) => {
    setShdowCreatePanel(show);
  };

  return (
    <PageFlexWrapper style={{ flexDirection: 'column' }}>
      <ActionRowWrapper>
        <ActionRow onCreateUser={() => onShowCreatePanel(true)} />
      </ActionRowWrapper>
      <TableWrapper>
        <DataTable value={users} responsiveLayout="scroll" loading={loading}>
          <Column field="name" header="Name" body={nameTemplate}></Column>
          <Column field="birthday" header="Birthday" body={dateTemplate}></Column>
          <Column field="email" header="Email"></Column>
          <Column field="phone" header="Phone"></Column>
          <Column field="gender" header="Gender"></Column>
          <Column field="permision" header="Role"></Column>
        </DataTable>
      </TableWrapper>
      <Sidebar className="createUserPanel" style={{ width: '80vw', maxWidth: '400px' }} visible={showCreatePanel} position="right" onHide={() => setShdowCreatePanel(false)} showCloseIcon={false} >
        <UserForm onClose={() => onShowCreatePanel(false)} />
      </Sidebar>
    </PageFlexWrapper>
  );
};

export default React.memo(AdminHomePage);