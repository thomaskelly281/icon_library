import { mdiCodeLessThan } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CodeLessThan(props: IconComponentProps) {
  return <Icon path={mdiCodeLessThan} {...props} />;
}

export { mdiCodeLessThan as path };
