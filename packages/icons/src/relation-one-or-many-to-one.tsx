import { mdiRelationOneOrManyToOne } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RelationOneOrManyToOne(props: IconComponentProps) {
  return <Icon path={mdiRelationOneOrManyToOne} {...props} />;
}

export { mdiRelationOneOrManyToOne as path };
