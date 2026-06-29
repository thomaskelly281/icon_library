import { mdiRelationOnlyOneToZeroOrOne } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RelationOnlyOneToZeroOrOne(props: IconComponentProps) {
  return <Icon path={mdiRelationOnlyOneToZeroOrOne} {...props} />;
}

export { mdiRelationOnlyOneToZeroOrOne as path };
