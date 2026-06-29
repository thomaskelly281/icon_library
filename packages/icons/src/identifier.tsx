import { mdiIdentifier } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Identifier(props: IconComponentProps) {
  return <Icon path={mdiIdentifier} {...props} />;
}

export { mdiIdentifier as path };
