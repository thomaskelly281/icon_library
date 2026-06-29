import { mdiGrain } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Grain(props: IconComponentProps) {
  return <Icon path={mdiGrain} {...props} />;
}

export { mdiGrain as path };
