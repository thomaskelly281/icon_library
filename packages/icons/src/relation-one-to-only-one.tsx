import { mdiRelationOneToOnlyOne } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RelationOneToOnlyOne(props: IconComponentProps) {
  return <Icon path={mdiRelationOneToOnlyOne} {...props} />;
}

export { mdiRelationOneToOnlyOne as path };
