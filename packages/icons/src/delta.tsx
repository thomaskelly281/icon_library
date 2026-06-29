import { mdiDelta } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Delta(props: IconComponentProps) {
  return <Icon path={mdiDelta} {...props} />;
}

export { mdiDelta as path };
