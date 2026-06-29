import { mdiRelationOneOrManyToZeroOrOne } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RelationOneOrManyToZeroOrOne(props: IconComponentProps) {
  return <Icon path={mdiRelationOneOrManyToZeroOrOne} {...props} />;
}

export { mdiRelationOneOrManyToZeroOrOne as path };
