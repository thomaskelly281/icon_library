import { mdiRelationOnlyOneToOnlyOne } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RelationOnlyOneToOnlyOne(props: IconComponentProps) {
  return <Icon path={mdiRelationOnlyOneToOnlyOne} {...props} />;
}

export { mdiRelationOnlyOneToOnlyOne as path };
