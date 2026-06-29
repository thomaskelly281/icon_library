import { mdiSignYield } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SignYield(props: IconComponentProps) {
  return <Icon path={mdiSignYield} {...props} />;
}

export { mdiSignYield as path };
