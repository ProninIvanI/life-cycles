import { InformationBlock } from '../WorkspaceForInformationBlock/InformationBlock/InformationBlock';
import { WorkspaceInformationBlock } from '../WorkspaceForInformationBlock/WorkspaceInformationBlock/WorkspaceInformationBlock';
import { Map } from '../WorkspaceForMap/Map/Map';
import { WorkspaceMap } from '../WorkspaceForMap/WorkspaceMap/WorkspaceMap';
import styles from './WorkspaceMainPage.module.css'

export function WorkspaceMainPage() {
  return(
    <div className={styles.container}>
      <WorkspaceMap>
        <Map/>
      </WorkspaceMap>
      <WorkspaceInformationBlock>
        <InformationBlock/>
      </WorkspaceInformationBlock>
    </div>
  );
}