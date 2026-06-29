import { mdiRelationOnlyOneToOne } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RelationOnlyOneToOne(props: IconComponentProps) {
  return <Icon path={mdiRelationOnlyOneToOne} {...props} />;
}

export { mdiRelationOnlyOneToOne as path };
