import { mdiDiabetes } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Diabetes(props: IconComponentProps) {
  return <Icon path={mdiDiabetes} {...props} />;
}

export { mdiDiabetes as path };
