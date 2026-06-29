import { mdiRelationOneToOne } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RelationOneToOne(props: IconComponentProps) {
  return <Icon path={mdiRelationOneToOne} {...props} />;
}

export { mdiRelationOneToOne as path };
