import { mdiEmailMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmailMinus(props: IconComponentProps) {
  return <Icon path={mdiEmailMinus} {...props} />;
}

export { mdiEmailMinus as path };
