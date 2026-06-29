import { mdiWeb } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Web(props: IconComponentProps) {
  return <Icon path={mdiWeb} {...props} />;
}

export { mdiWeb as path };
