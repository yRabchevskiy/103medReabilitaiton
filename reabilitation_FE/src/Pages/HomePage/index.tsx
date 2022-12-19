import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ISelectedObject } from '../../Api/models/common';
import { ILanguage } from '../../Api/models/language';
import { useGet } from '../../Api/service';
import { selectUnselectObject } from '../../Api/utils/common';
import LanguageItem from '../../Components/Language/LanguageItem';
import { AuthContext } from '../../Contexts/auth/uaeAuthContext';
import { PageFlexWrapper } from '../page_style';
interface Props { }
const HomePage: React.FC<Props> = (props: Props) => {
  const [data, setData] = React.useState<ILanguage[] | null>(null);
  const { loading, response, error, onGet } = useGet<ILanguage[]>();
  const [selectedLang, setSelectedLang] = React.useState<ISelectedObject>({});
  const { user } = useContext(AuthContext);
  React.useEffect(() => {
    getLanguages();
  }, []);

  React.useEffect(() => {
    if (response) {
      setData(response);
    }
  }, [response])

  const getLanguages = () => {
    // onGet('http://localhost:8080/api/languages'); 
  }

  const onSelectLang = (id: string) => {
    setSelectedLang(selectUnselectObject(selectedLang, id));
  }
  return (
    <PageFlexWrapper>
      {/* {loading ? <div style={{ margin: 'auto', fontSize: '20px', fontWeight: 700 }}>Loading...</div> : null}
      {data && data.length && data.map((it, index) => {
        return (
          <LanguageItem key={it.name + 'app' + index} item={it} isSelected={!!selectedLang[it._id]} onSelect={(id: string) => onSelectLang(id)} />
        );
      })} */}
      <Link to="/admin">admin</Link>
    </PageFlexWrapper>
  );
};

export default React.memo(HomePage);