import { mdiRelationZeroOrOneToOnlyOne } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RelationZeroOrOneToOnlyOne(props: IconComponentProps) {
  return <Icon path={mdiRelationZeroOrOneToOnlyOne} {...props} />;
}

export { mdiRelationZeroOrOneToOnlyOne as path };
