import { mdiBowl } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Bowl(props: IconComponentProps) {
  return <Icon path={mdiBowl} {...props} />;
}

export { mdiBowl as path };
