import { mdiVuejs } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Vuejs(props: IconComponentProps) {
  return <Icon path={mdiVuejs} {...props} />;
}

export { mdiVuejs as path };
