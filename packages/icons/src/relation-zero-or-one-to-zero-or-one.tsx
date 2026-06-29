import { mdiRelationZeroOrOneToZeroOrOne } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RelationZeroOrOneToZeroOrOne(props: IconComponentProps) {
  return <Icon path={mdiRelationZeroOrOneToZeroOrOne} {...props} />;
}

export { mdiRelationZeroOrOneToZeroOrOne as path };
