import { mdiDuck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Duck(props: IconComponentProps) {
  return <Icon path={mdiDuck} {...props} />;
}

export { mdiDuck as path };
