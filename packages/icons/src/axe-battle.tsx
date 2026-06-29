import { mdiAxeBattle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AxeBattle(props: IconComponentProps) {
  return <Icon path={mdiAxeBattle} {...props} />;
}

export { mdiAxeBattle as path };
