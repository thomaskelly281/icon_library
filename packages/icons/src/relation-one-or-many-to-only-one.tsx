import { mdiRelationOneOrManyToOnlyOne } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RelationOneOrManyToOnlyOne(props: IconComponentProps) {
  return <Icon path={mdiRelationOneOrManyToOnlyOne} {...props} />;
}

export { mdiRelationOneOrManyToOnlyOne as path };
