import { mdiLambda } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Lambda(props: IconComponentProps) {
  return <Icon path={mdiLambda} {...props} />;
}

export { mdiLambda as path };
