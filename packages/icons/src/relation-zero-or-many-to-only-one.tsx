import { mdiRelationZeroOrManyToOnlyOne } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RelationZeroOrManyToOnlyOne(props: IconComponentProps) {
  return <Icon path={mdiRelationZeroOrManyToOnlyOne} {...props} />;
}

export { mdiRelationZeroOrManyToOnlyOne as path };
