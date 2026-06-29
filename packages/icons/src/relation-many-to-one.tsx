import { mdiRelationManyToOne } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RelationManyToOne(props: IconComponentProps) {
  return <Icon path={mdiRelationManyToOne} {...props} />;
}

export { mdiRelationManyToOne as path };
