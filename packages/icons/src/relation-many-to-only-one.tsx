import { mdiRelationManyToOnlyOne } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RelationManyToOnlyOne(props: IconComponentProps) {
  return <Icon path={mdiRelationManyToOnlyOne} {...props} />;
}

export { mdiRelationManyToOnlyOne as path };
