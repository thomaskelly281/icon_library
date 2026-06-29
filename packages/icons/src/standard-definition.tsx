import { mdiStandardDefinition } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StandardDefinition(props: IconComponentProps) {
  return <Icon path={mdiStandardDefinition} {...props} />;
}

export { mdiStandardDefinition as path };
