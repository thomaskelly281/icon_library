import { mdiShore } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Shore(props: IconComponentProps) {
  return <Icon path={mdiShore} {...props} />;
}

export { mdiShore as path };
