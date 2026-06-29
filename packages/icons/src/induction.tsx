import { mdiInduction } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Induction(props: IconComponentProps) {
  return <Icon path={mdiInduction} {...props} />;
}

export { mdiInduction as path };
