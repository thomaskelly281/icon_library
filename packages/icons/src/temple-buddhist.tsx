import { mdiTempleBuddhist } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TempleBuddhist(props: IconComponentProps) {
  return <Icon path={mdiTempleBuddhist} {...props} />;
}

export { mdiTempleBuddhist as path };
