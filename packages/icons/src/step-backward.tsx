import { mdiStepBackward } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StepBackward(props: IconComponentProps) {
  return <Icon path={mdiStepBackward} {...props} />;
}

export { mdiStepBackward as path };
