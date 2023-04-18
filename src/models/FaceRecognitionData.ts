export interface FaceRecognitionData {
    outputs:[
      {data:{
        regions:[{
          region_info:{
            bounding_box:{
              left_col:number;
              top_row:number;
              right_col:number;
              bottom_row:number
            }
          }
        }]
      }}
    ]
}