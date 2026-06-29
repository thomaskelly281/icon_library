import { mdiSignature } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Signature(props: IconComponentProps) {
  return <Icon path={mdiSignature} {...props} />;
}

export { mdiSignature as path };
